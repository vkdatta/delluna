export const name="tiktok-logo-thin";
export const id="dl_cd0655e2d2276e41c990";
export const url=new URL("../icons/tiktok-logo-thin.svg?v=3ccd7a8ac6ecc6ccfe7864df54f9595b7b7381111bdd361bc7b1c923314ae1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
