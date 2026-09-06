export const name="lightning-slash-bold";
export const id="dl_c0688c27361e466b96e4";
export const url=new URL("../icons/lightning-slash-bold.svg?v=76ce0b8ed6516be95e40e28207b8d03a128590d77748a816375295c4deccd094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
