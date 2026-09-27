export const name="brain-thin";
export const id="dl_ecfb825f0c46462eadf0";
export const url=new URL("../icons/brain-thin.svg?v=10ce33733353f24b1fb98d1d09a1f9b769ab41b6a464562a6288a27da798c6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
