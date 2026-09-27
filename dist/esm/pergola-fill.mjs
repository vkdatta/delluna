export const name="pergola-fill";
export const id="dl_ccf31fc12b60cd36275d";
export const url=new URL("../icons/pergola-fill.svg?v=001484a672c1b296be3189970c25835cfd99b13d9f4b953300f81a682ff190eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
