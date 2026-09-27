export const name="arrow-clockwise";
export const id="dl_86ccdf83a02046769358";
export const url=new URL("../icons/arrow-clockwise.svg?v=18d4d74a4841fd2bb4b9b8784422ae97b840f8a78fc27b4a23a8c8f5424393d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
