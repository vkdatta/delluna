export const name="envelope-open-thin";
export const id="dl_096feb547cc441cfb82d";
export const url=new URL("../icons/envelope-open-thin.svg?v=3f89c98b3bbd9595f2f3a23cd5c7d4f5d91752fffd846d37e1c1d8e89e35f4ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
