export const name="soundcloud-logo-thin";
export const id="dl_029977dc2fac42e2b095";
export const url=new URL("../icons/S/soundcloud-logo-thin.svg?v=5e05656e5d57e021b3fbe2274f6f19e29e30b5eee5d6b3b0c6d8e128bb56b75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
