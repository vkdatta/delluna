export const name="arrow-fat-line-right-thin";
export const id="dl_8fcf369b7b364a6dbf37";
export const url=new URL("../icons/arrow-fat-line-right-thin.svg?v=1251db464a50d685487c7b7d94de4c69200aabc8828b5e1a2cb0eb0480ac1d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
