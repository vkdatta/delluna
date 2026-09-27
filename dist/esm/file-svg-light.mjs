export const name="file-svg-light";
export const id="dl_b29d734e1bc14f2a82e0";
export const url=new URL("../icons/file-svg-light.svg?v=a8f8b15ef7720134e530b24a6fd502f4b1e0a39d30aef2ab7b91597d6e8974f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
