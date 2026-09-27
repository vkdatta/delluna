export const name="file-arrow-up-thin";
export const id="dl_a163d4921c07456e9274";
export const url=new URL("../icons/file-arrow-up-thin.svg?v=4acf400eb589563754c3d5e4e5144678b749b150cafea39ab989057745d83a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
