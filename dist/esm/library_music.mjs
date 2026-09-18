export const name="library_music";
export const id="dl_6f85bc0c382e4b3282c5";
export const url=new URL("../icons/library_music.svg?v=4e2bff03d1ca3a4ffdf8fbb3b4406e051e66dd7b46ebb0e0cadd3bb6b5ce8ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
