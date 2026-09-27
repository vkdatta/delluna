export const name="money_bag";
export const id="dl_50ea48ed6eb5bb2ee0b7";
export const url=new URL("../icons/money_bag.svg?v=037d95fdda95e16c490775c2eba5f29bacecd7c0bcc8875c54ca7e461c08551f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
