export const name="file_copy_off";
export const id="dl_88d3cb69a0976248e948";
export const url=new URL("../icons/file_copy_off.svg?v=365950d6b80b07b507bd5468a6f480647c19bd6750591111ce1a9fca583ca04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
