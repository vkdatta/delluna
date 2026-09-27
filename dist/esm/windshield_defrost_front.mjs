export const name="windshield_defrost_front";
export const id="dl_cc091750ad0cb8fef2a3";
export const url=new URL("../icons/windshield_defrost_front.svg?v=154e7fb02f224a4b017d6d6b3bac9166cb9c7b6fc626e9751ec4953e6857588a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
