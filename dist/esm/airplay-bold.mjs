export const name="airplay-bold";
export const id="dl_2c854e7251454cfcbe2f";
export const url=new URL("../icons/airplay-bold.svg?v=6b5e74146293644973da4658938ddeddbfaa7174b140b9543e19a76adf81fd2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
