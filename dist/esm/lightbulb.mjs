export const name="lightbulb";
export const id="dl_66440e734ace4221b8eb";
export const url=new URL("../icons/lightbulb.svg?v=b61e4d9685a1d74e579a7dbbe0d5222bdf8dcdcaf5b67825a17ff45363e4fadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
