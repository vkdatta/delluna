export const name="sparkle-light";
export const id="dl_530ba9c97fcae459607a";
export const url=new URL("../icons/sparkle-light.svg?v=df5f7f7db146a6aa9dec25faacb51a2693e896050dbef99e48189a51bd8dd9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
