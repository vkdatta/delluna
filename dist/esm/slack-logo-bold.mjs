export const name="slack-logo-bold";
export const id="dl_1c25b02d7913a46506ff";
export const url=new URL("../icons/slack-logo-bold.svg?v=04cd05d0807b0895c96d0f7812d263ce2a19835c069142386cfe50ab537f3ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
