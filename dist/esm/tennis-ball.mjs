export const name="tennis-ball";
export const id="dl_0be8250297e62ad3a1e6";
export const url=new URL("../icons/tennis-ball.svg?v=f08d06370eb1b49cff686c7dcfc71dae86f3052bf5a6abef915e26bc2bf988f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
