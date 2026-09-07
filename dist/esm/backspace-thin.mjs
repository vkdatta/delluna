export const name="backspace-thin";
export const id="dl_913d5af5aa864111850a";
export const url=new URL("../icons/backspace-thin.svg?v=f58021e05c5c7468a3434fa968ff17c6e2269e0c081b50ff6c9a182ffaf3773a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
