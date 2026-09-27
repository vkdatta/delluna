export const name="student";
export const id="dl_56b4471f87b1aa658253";
export const url=new URL("../icons/student.svg?v=ec33bd87fb30756b1333ea8ed7fc72d0cbfc1d16bfabf3bb8ce087d0f70e69ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
