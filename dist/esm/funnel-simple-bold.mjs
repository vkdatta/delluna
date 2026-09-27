export const name="funnel-simple-bold";
export const id="dl_e69392e9df3247d5a833";
export const url=new URL("../icons/funnel-simple-bold.svg?v=be56ba970286a58959e549adc93e1174cc3cde60c10aac87bafefa08dd0a32ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
