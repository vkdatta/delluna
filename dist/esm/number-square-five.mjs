export const name="number-square-five";
export const id="dl_761a1f23a185434b8a35";
export const url=new URL("../icons/number-square-five.svg?v=459dd15510ad063d3bcfff547944f657f9c81310cd1f126e8abbf0e1f3121920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
