export const name="number-square-nine";
export const id="dl_7ffcfd2a76a148aeb939";
export const url=new URL("../icons/number-square-nine.svg?v=b89a765e6dfa03395fa16f36f48dce070cd1f2f795649c2cb1684fe8c7779960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
