export const name="lucid_3-message-circle";
export const id="dl_690a9ea7380c4e7d8614";
export const url=new URL("../icons/lucid_3-message-circle.svg?v=66a825ddb61d7a92a12bfeb9fb07c70d8ad6736b7aff8740514fdde6df5ec437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
