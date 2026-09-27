export const name="file-audio-bold";
export const id="dl_fd9fb4d30c6a44d29f07";
export const url=new URL("../icons/file-audio-bold.svg?v=94d7d21446a1fdce2c6b9fac95deedaa2b77c2b5fbc1498639a6de598acdf329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
