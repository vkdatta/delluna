export const name="baseball-light";
export const id="dl_04183be94f7442808ddc";
export const url=new URL("../icons/baseball-light.svg?v=04d7ed8ff928e7bc254c03005581cf8b34e92a008394274f52bb795edbe87982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
