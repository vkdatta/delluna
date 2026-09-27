export const name="lucid_2-house-wifi";
export const id="dl_4d1f708ec83547e1aa6a";
export const url=new URL("../icons/lucid_2-house-wifi.svg?v=b4509cc5f3cf981ef3250bc91096ddd374dc39a2e8685edccb8796ff4bbb1c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
