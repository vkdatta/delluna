export const name="textbox-thin";
export const id="dl_da8e983aca219666fa53";
export const url=new URL("../icons/textbox-thin.svg?v=01704456ffb29a0b10d8d235ab1575e2f5b218febdae862e69f13d58ccacf8f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
