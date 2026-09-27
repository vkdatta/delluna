export const name="clock-user";
export const id="dl_ecf36f989fe349e6aca5";
export const url=new URL("../icons/clock-user.svg?v=228d355df9f04e0f91d2683c19ed481ab2c2e02db4ead108c48211fcd00325b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
