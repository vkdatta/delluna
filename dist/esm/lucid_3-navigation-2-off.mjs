export const name="lucid_3-navigation-2-off";
export const id="dl_dabea2a0c8a4405e829f";
export const url=new URL("../icons/lucid_3-navigation-2-off.svg?v=96d9990e7fb7172702c0a5b653d22398d62aa96bc7b101a8728d6fc152d980fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
