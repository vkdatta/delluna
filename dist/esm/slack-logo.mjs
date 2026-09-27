export const name="slack-logo";
export const id="dl_71f388ee8822408f6c31";
export const url=new URL("../icons/slack-logo.svg?v=58d9b4244f71405f1663c70673fb314a2f0f1f3eb37c64b4195c459b868625b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
