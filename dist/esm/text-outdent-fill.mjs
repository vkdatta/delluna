export const name="text-outdent-fill";
export const id="dl_8ca1ccc8fb5ba6919c6f";
export const url=new URL("../icons/text-outdent-fill.svg?v=a76c3916c9e6af3d4d8c40cae267fffebf191242caa869f8ed0a70d31512cb5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
