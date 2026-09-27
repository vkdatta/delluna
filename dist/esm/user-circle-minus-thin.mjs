export const name="user-circle-minus-thin";
export const id="dl_0b0e127fe4cd92d5c2c8";
export const url=new URL("../icons/user-circle-minus-thin.svg?v=a28c43985abb6e5b6b9073155b76b8a77331e739325dd6b95d43d3c819ced7d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
