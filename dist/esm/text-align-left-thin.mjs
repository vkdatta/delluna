export const name="text-align-left-thin";
export const id="dl_882c15528b8a507e2efb";
export const url=new URL("../icons/text-align-left-thin.svg?v=d019067fc8c8b8b4c726d9f9dff3c2592d58e46d3749fad61becb8cc6344b6ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
