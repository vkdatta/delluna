export const name="number-square-six-thin";
export const id="dl_6e141e388ee34bce9151";
export const url=new URL("../icons/number-square-six-thin.svg?v=7cedb283565e28c5b83862de7b164ac86737005681ffa4de2bdc77bc4676cfac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
