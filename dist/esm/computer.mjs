export const name="computer";
export const id="dl_14718c9db3c9a119dac3";
export const url=new URL("../icons/computer.svg?v=826210b590a44a36bb2a0ee916dea1e13b366f3fc2d73e1a8e8154b76e97bf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
