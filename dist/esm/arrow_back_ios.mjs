export const name="arrow_back_ios";
export const id="dl_b92ea194a74b4e2f83d8";
export const url=new URL("../icons/A/arrow_back_ios.svg?v=e93302e2a0ac0e9aca6c8710c466587362e911d1acd312ad03bb8cf3e45face6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
