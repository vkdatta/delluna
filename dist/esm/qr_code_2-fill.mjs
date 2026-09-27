export const name="qr_code_2-fill";
export const id="dl_a181078948c13cfe7a46";
export const url=new URL("../icons/qr_code_2-fill.svg?v=a08438c9ed6fbb417bf1c7a87487a0871c1ab8ba86f7f117d160273f19c3934c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
