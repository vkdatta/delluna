export const name="book_6-fill";
export const id="dl_9b04ebdc05504aaf8548";
export const url=new URL("../icons/book_6-fill.svg?v=2a9f5182b392d295e091804b886a97aa3cb7b9c503560fe00a19d4201594abd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
