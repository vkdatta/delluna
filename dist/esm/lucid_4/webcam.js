export const name="webcam";
export const id="dl_6d12e0a479464e3f9222";
export const url=new URL("../../icons/lucid_4/webcam.svg?v=9e88fe9d68f4ee0b460502a6f2bd4dc38b62fd4c703dae5569234a3b0f8ccad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
