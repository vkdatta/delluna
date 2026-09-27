export const name="nephrology";
export const id="dl_fb6bf25fc70bd1d32dc5";
export const url=new URL("../icons/nephrology.svg?v=488efaa2c6c99bd97ebcf7ad58e957c9d9a1edf5f22230ee9b3a4e2a3982ca0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
