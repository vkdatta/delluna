export const name="percent-thin";
export const id="dl_1ad03125da5940b793b4";
export const url=new URL("../icons/percent-thin.svg?v=6063c1b8b1414a4314427e02f877ee72ae965c1111c80357a42ffeee74f4fb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
