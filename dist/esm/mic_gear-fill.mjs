export const name="mic_gear-fill";
export const id="dl_70b06c7e20ba2e4542bf";
export const url=new URL("../icons/mic_gear-fill.svg?v=a7ef9bd271e2c422c74932fc5ff51a0188a8be2ec0ff5a4c19d5c4489d1b5cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
