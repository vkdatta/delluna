export const name="tumblr-logo";
export const id="dl_b0d5435196bb4098d79b";
export const url=new URL("../icons/tumblr-logo.svg?v=b59f5c92a3c3a69ef38c062928f391d03feaca0f1138f6c96705928188864876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
