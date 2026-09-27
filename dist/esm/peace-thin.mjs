export const name="peace-thin";
export const id="dl_7514d244a004490fbc89";
export const url=new URL("../icons/peace-thin.svg?v=3f31dbb6751a58dc87f866676995f6c23788b6e3cdf49ca5036c21c822f92100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
