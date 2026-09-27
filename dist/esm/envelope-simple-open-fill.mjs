export const name="envelope-simple-open-fill";
export const id="dl_68e1cdd515dd4d7798ae";
export const url=new URL("../icons/envelope-simple-open-fill.svg?v=62ddd5b13119a6328c13fafe4d9d7ef0a9f8640cd59f869470aa64bfc4fe8316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
