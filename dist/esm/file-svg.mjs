export const name="file-svg";
export const id="dl_e28f9146b1a54bbf95cf";
export const url=new URL("../icons/file-svg.svg?v=cc194d9be3c8173e398967c6f48488d3379074b10f4d4faaab7cb1c7180c2877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
