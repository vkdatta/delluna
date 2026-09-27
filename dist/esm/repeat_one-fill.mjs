export const name="repeat_one-fill";
export const id="dl_966808e4e5a38a2084b8";
export const url=new URL("../icons/repeat_one-fill.svg?v=4805d48a1fa56fab0042460cad201f53034d0e6e2029c180b28c3475c264aee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
