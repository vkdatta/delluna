export const name="crop_21_9";
export const id="dl_bb448c8215ee46beaf7b";
export const url=new URL("../icons/crop_21_9.svg?v=d189fe74ea2557545267a52ad22a3473bf712a3f4ca539fea5d268744f8bd503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
