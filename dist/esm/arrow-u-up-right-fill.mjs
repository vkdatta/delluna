export const name="arrow-u-up-right-fill";
export const id="dl_2e8e933873b94d75b4b7";
export const url=new URL("../icons/arrow-u-up-right-fill.svg?v=5b4c7535d1c58bde4c4f87e2ab23c8d20ddf6a1d039a1f968445c811bcc537c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
