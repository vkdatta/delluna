export const name="spinner-ball-thin";
export const id="dl_cc6691bd022a4dca96cc";
export const url=new URL("../icons/S/spinner-ball-thin.svg?v=f315141ec6dc0764d88ffa409eb54e4a6b8adf24810b0512f6bac2caa617bf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
