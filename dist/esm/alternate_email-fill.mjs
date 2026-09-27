export const name="alternate_email-fill";
export const id="dl_b42cef9c18d3bd54aaa6";
export const url=new URL("../icons/alternate_email-fill.svg?v=c6dcbdab454d30cbe79a9434f342a3483f499ca46a9513f250aefb2c3afeee4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
