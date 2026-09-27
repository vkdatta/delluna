export const name="webhooks-logo-fill";
export const id="dl_4a737ccc24a8efcd34a9";
export const url=new URL("../icons/webhooks-logo-fill.svg?v=feafe61e160dfa9bdc71f4fed92d5d6474ddb8c270a29dcfc758c4ee1636a565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
