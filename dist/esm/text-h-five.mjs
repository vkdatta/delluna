export const name="text-h-five";
export const id="dl_808dfebda582876b46d4";
export const url=new URL("../icons/text-h-five.svg?v=a6342fb59a8940cc221706c9a4017c1af642020ec6ed384c40835b98eaa7c2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
