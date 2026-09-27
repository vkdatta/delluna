export const name="snowflake-bold";
export const id="dl_9751db180981bcd45d1e";
export const url=new URL("../icons/snowflake-bold.svg?v=b535e4e70ca4127dccf75f0bfe569aed3ce2053617b6eff9b105602079f91dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
