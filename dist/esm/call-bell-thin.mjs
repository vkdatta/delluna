export const name="call-bell-thin";
export const id="dl_6d0c6f40602744719620";
export const url=new URL("../icons/call-bell-thin.svg?v=b4d68b2518258d538d47a1094a6c150e57fc87e12a4f4335e55ca8d05b7aa142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
