export const name="lucid_2-face-neutral";
export const id="dl_2d0b6b9800434e7a8f5b";
export const url=new URL("../icons/lucid_2-face-neutral.svg?v=1ade167b2a215b166e92748b761a78ac7fd1ec61b33460b85674a924c7d5cd9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
